import SkillTag from "./SkillTag";

const SkillList = ({ skills }: { skills: string[] }) => {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies Used">
      {skills.map((skill) => (
        <SkillTag key={skill} skill={skill} />
      ))}
    </ul>
  );
};

export default SkillList;
