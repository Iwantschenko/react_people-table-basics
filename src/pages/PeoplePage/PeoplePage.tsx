import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';
import { Person } from '../../types';
import { getPeople } from '../../api';
import { PeopleTable } from '../../components/PeopleTable';

export const PeoplePage = () => {
  const [peopleList, setPeopleList] = useState<Person[]>();
  const [errorMessage, setErrorMessage] = useState(false);

  const renderContent = () => {
    if (errorMessage) {
      return (
        <p data-cy="peopleLoadingError" className="has-text-danger">
          Something went wrong
        </p>
      );
    }

    if (!peopleList) {
      return <Loader />;
    }

    if (!peopleList.length) {
      return <p data-cy="noPeopleMessage">There are no people on the server</p>;
    }

    return <PeopleTable peopleList={peopleList} />;
  };

  useEffect(() => {
    getPeople()
      .then(setPeopleList)
      .catch(() => setErrorMessage(true));
  }, []);

  return (
    <div className="container">
      <h1 className="title">People Page</h1>

      <div className="block">
        <div className="box table-container">{renderContent()}</div>
      </div>
    </div>
  );
};
