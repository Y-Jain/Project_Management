import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import IssueCard from "./IssueCard"
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import CreateIssueForm from "./CreateIssueForm";

interface IssueListProps {
    title: string;
    status: string;
}
  
const IssueList = ({ title, status }: IssueListProps) => {
    return (
    <div>
      <Dialog>
        <Card className="w-full md:w-[300px] lf:w-[310px]">
        <CardHeader>
            <CardTitle>{title}

            </CardTitle>

        </CardHeader>
        <CardContent>
            <div className="space-y-2">
                {[1,1,1].map((item)=> <IssueCard key={item}/>  )}

            </div>
        </CardContent>
        <CardFooter>
            <DialogTrigger>
                <Button
                    variant="outline" 
                className="w-full flex items-center gap-2 "
                >
                    <PlusIcon/>
                    Create Issue
                </Button>
            </DialogTrigger>
        </CardFooter>

        </Card>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Create New Issue</DialogTitle>
            </DialogHeader>
            <CreateIssueForm/>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default IssueList
