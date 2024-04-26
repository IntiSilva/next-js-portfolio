const formatTech = (techString) => {
    return techString.split(',').map(tech => tech.trim()).join(' | ');
  };

export default formatTech