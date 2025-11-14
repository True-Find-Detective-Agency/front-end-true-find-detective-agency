export const filterServices = (services, query) => {
  if (!query) return services;

  const q = query.toLowerCase();

  return services.filter(service => {
    const textFields =
      service.title.toLowerCase() +
      service.icon.toLowerCase() +
      service.description.toLowerCase() +
      service.price.toLowerCase();

    const mainMatch = textFields.includes(q);
    const featureMatch = service.features.some(f => f.toLowerCase().includes(q));

    return mainMatch || featureMatch;
  });
};
