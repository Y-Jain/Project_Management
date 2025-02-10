import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MagnifyingGlassIcon, MixerHorizontalIcon } from '@radix-ui/react-icons'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import ProjectCard from '../Project/ProjectCard';
// import ProjectCard from '../Project/ProjectCard';
 
export const tags=[
  "all","react","nextjs","spring boot","mysql","mongodb","angular","python","flask","django"
];


const ProjectList = () => {
  const [keyword,setKeyword] = useState<string>("");
  const handleFilterChange = (section : string, value: string) => {
    console.log("value",value, section);
  };
const handleSearchChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
  if (event.target) {
    setKeyword(event.target.value);
  }
}
  return (
   <>
   <div className='relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5 '>

    <section className='filterSection'>

      <Card className='p-5 sticky top-10'>

        <div className='flex justify-between lg:w-[20rem]'>
          <p className='text-x1 -tracking-wider'>Filters</p>
          <Button variant="ghost" size="icon">
            <MixerHorizontalIcon/>
          </Button>
        </div>

        <CardContent className="mt-5 overflow-auto h-[70vh]">
          <ScrollArea className="space-y-7 h-[70vh]">

            <div>
              <h1 className='pb-3 text-gray-400 border-b'>
                Category
              </h1>
              <div className='pt-5'>
              <RadioGroup 
               className="space-y-3 pt-5"
               defaultValue="All" 
               onValueChange={(value)=>
                handleFilterChange("category",value)
               }
               >
               <div className="flex items-center gap-2 ">
               <RadioGroupItem value='All' id="r1"/>
               <Label htmlFor='r1'>All</Label>
                </div>
                <div className="flex items-center gap-2 ">
               <RadioGroupItem value="Fullstack" id="r2"/>
               <Label htmlFor='r2'>Fullstack</Label>
                </div>
                <div className="flex items-center gap-2 ">
               <RadioGroupItem value="Frontend" id="r3"/>
               <Label htmlFor='r3'>Frontend</Label>
                </div>
                <div className="flex items-center gap-2 ">
               <RadioGroupItem value="Backend" id="r4"/>
               <Label htmlFor='r4'>Backend</Label>
                </div>
              </RadioGroup>
             </div>
            </div>

            <div className="">
              <h1 className='pb-3 text-gray-400 border-b'>Tag</h1>
              <div className='pt-5'>
              <RadioGroup 
              className="space-y-3 pt-5"
              defaultValue="all" onValueChange={(value)=>handleFilterChange("Tag", value)}
                >
               {tags.map((item)=> ( 
                <div key={item} className="flex items-center gap-2 ">
               <RadioGroupItem value={item} id={`r1-${item}`}/>
               <Label htmlFor={`r1-${item}`}>{item}</Label>
                </div>))}
               
              </RadioGroup>
             </div>
            </div>
          </ScrollArea>
        </CardContent>
        </Card>     
      </section> 
      <section className='projectListsection w-full lg:w-[48rem] '>
        <div className="flex gap-2 items-center pb-5 justify-between">
          
          <div className="relative p-0 w-full">
            <Input
            onChange={handleSearchChange}
             placeholder="search project"
             className="40% px-9"/>
             <MagnifyingGlassIcon className="absolute top-3 left-4"/>
            

          </div>

        </div>
        <div>
          <div className="space-y-5 min-h-[74vh]">

          { keyword ?
            [1, 1, 1].map((item) =><ProjectCard key={item}/>):
            [1, 1, 1, 1,1].map((item) => (<ProjectCard key={item}/>))
  
            
          }
          {/* { keyword ?
            [1, 1, 1].map((item) =><div>project card</div>):
            [1, 1, 1, 1 ].map((item) => <div>project card</div>)
              
            
          }  */}
           {/* {keyword ? 
            [1, 1, 1].map((_, index) => <ProjectCard key={index} />) : 
            [1, 1, 1, 1, 1].map((_, index) => <ProjectCard key={index} />)
          } */}


          </div>
        </div>
      </section>
   </div> </>
  )
}

export default ProjectList
