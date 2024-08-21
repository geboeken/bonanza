const Publishers = () => {
    const publishers = [
      { name: 'VPress', logo: './', description: 'Some description about VPress.' },
      { name: 'NONVER', logo: 'path_to_logo_nonver', description: 'Some description about NONVER.' },
      { name: 'Ember', logo: 'path_to_logo_ember', description: 'Some description about Ember.' },
    ];
  
    return (
      <section className="p-4 bg-gray-100 text-black">
        <h2 className="font-manrope text-3xl mb-4">Publishers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {publishers.map((publisher, index) => (
            <div key={index} className="text-center">
              <img src={publisher.logo} alt={publisher.name} className="mx-auto h-24" />
              <h3 className="font-manrope text-xl mt-2">{publisher.name}</h3>
              <p className="font-inter text-gray-600">{publisher.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Publishers;  