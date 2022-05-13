import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("Can not show users list to a inexistent user");
    }

    if (!user.admin) {
      throw new Error("Should be an admin to access users list");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
