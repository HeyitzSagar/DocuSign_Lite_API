import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { IUserInput } from '../../../../@types/user';

export class UserHandler {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async createUser(req: Request<{}, {}, IUserInput>, res: Response) {
        try {
            const userData = req.body;
            const user = await this.userService.createUser(userData);
            res.status(201).json({ success: true, data: user });
        } catch (error: any) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}
