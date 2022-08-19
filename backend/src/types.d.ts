import express, { Request } from "express";

export interface JWTPayload {
  id: string;
  firstname: string;
  lastname: string;
  nickname?: string;
  iat: number;
}

export interface RequestWithUserId extends Request {
  userId?: string;
}

export interface Friend {
  firstname: string;
  lastname: string;
  nickname: string;
}
