package com.judontknowme.discussion;

//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class MessageController {
//
//    @Autowired
//    MessageRepository insertSQL;
//
//    @GetMapping("/discussion")
//    public List<Message> getMessages() {
//        List<Message> foundMessages = insertSQL.findAll();
//        return foundMessages;
//    }
//
//    @GetMapping("/discussion/{id}")
//    public ResponseEntity<Message> getMessage(@PathVariable(value="id") Integer id) {
//        Message foundMessage = insertSQL.findById(id).orElse(null);
//
//        if(foundMessage == null) {
//            return ResponseEntity.notFound().header("Message","Nothing found with that id").build();
//        }
//        return ResponseEntity.ok(foundMessage);
//    }
//
//    @PostMapping("/discussion")
//    public ResponseEntity<Message> postMessage(@RequestBody Message message) {
//
//        // saving to DB using instance of the repo interface
//        Message createdMessage = insertSQL.save(message);
//
//        // RespEntity crafts response to include correct status codes.
//        return ResponseEntity.ok(createdMessage);
//    }
//
//    @DeleteMapping("/chat/{id}")
//    public ResponseEntity<Message> deleteMessage(@PathVariable(value="id") Integer id) {
//        Message foundMessage = insertSQL.findById(id).orElse(null);
//
//        if(foundMessage == null) {
//            return ResponseEntity.notFound().header("Message","Nothing found with that id").build();
//        }else {
//            insertSQL.delete(foundMessage);
//        }
//        return ResponseEntity.ok().build();
//    }
//}