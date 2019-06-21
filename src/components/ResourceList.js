import React from 'react';
import useResources from './useResources';



//refactor using functional component
//useEffect allows functional component to use lifecycle method(Didmount and DidUpdate)
const ResourceList = ({resource}) => {
  const resources = useResources(resource);

    return (
      <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
      )
}

export default ResourceList;
