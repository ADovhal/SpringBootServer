package org.example.exceptions;

public class DuplicateUserException extends Exception{
    public DuplicateUserException(String message){
        super(message);
    }
}