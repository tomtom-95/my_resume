import {FC, memo, PropsWithChildren} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="inline-flex flex-col items-center p-6 border rounded-lg shadow-md bg-gradient-to-br from-gray-50 to-gray-100 w-auto">
      <span className="text-center text-xl font-bold mb-4 text-gray-900 uppercase tracking-wide">{name}</span>
      <ul className="list-none flex flex-wrap gap-6 justify-center">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </ul>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name} = skill;

  return (
    <li className="text-sm font-medium text-gray-700 flex items-center gap-2">
      <span className="inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
      {name}
    </li>
  );
});

Skill.displayName = 'Skill';
