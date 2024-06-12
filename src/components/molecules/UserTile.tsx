import { GithubUser } from "../../ts/GithubUser";
import { Accordion, AccordionBody, AccordionHeader } from "../atoms/Accordion";

const UserTile = ({ login, avatar_url }: GithubUser) => {
  return (
    <Accordion>
      <AccordionHeader>
        <div className="flex items-center justify-center space-x-2">
          <img src={avatar_url} alt="" className="w-10 rounded-full" />
          <p className="font-medium text-neutral-900">{login}</p>
        </div>
      </AccordionHeader>
      <AccordionBody>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </AccordionBody>
    </Accordion>
  );
};

export default UserTile;
