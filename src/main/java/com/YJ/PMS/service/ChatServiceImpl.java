package com.YJ.PMS.service;

import com.YJ.PMS.modal.Chat;
import com.YJ.PMS.repository.ChatRepository;
import org.springframework.stereotype.Service;

@Service
public class ChatServiceImpl implements ChatService {
    private ChatRepository chatRepository;


    @Override
    public Chat createChat(Chat chat) {

        return chatRepository.save(chat);
    }
}
