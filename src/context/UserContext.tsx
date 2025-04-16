import { createContext } from "react";

type UserContextType = {
    username : string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextType>({
    username : "",
    setUsername : () => {},
});