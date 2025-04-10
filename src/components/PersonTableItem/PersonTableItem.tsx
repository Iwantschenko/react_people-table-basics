import { Person } from '../../types';
import { PersonLink } from '../PersonLink';

interface Props {
  person: Person;
}

export const PersonTableItem: React.FC<Props> = ({ person }) => {
  return (
    <tr data-cy="person">
      <td>
        <PersonLink person={person} />
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>
        <PersonLink person={person.mother} />
      </td>
      <td>
        <PersonLink person={person.father} />
      </td>
    </tr>
  );
};
