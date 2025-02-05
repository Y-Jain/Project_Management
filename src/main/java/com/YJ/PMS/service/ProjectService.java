package com.YJ.PMS.service;
import java.util.List;

import com.YJ.PMS.modal.Chat;
import com.YJ.PMS.modal.Project;
import com.YJ.PMS.modal.User;

public interface ProjectService {
    Project createProject(Project project, User user)throws Exception;

    List<Project> getProjectsByTeam(User user, String category, String tag)throws Exception;

    Project getProjectById(Long projectId)throws Exception;

    void deleteProject(Long projectId, Long userId)throws Exception;

    Project updateProject(Project updatedproject, Long id)throws Exception;

    void addUserToProject(Long projectId, Long userId)throws Exception;

    void removeUserFromProject(Long projectId, Long userId)throws Exception;

    Chat getChatByProjectId(Long projectId)throws Exception;

    List<Project> searchProjects(String keyword, User user)throws Exception;
}
