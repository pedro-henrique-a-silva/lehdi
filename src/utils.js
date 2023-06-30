export const setPhaseValue = (phaseId) => {
  const phaseEL = document.querySelector('.phase');
  phaseEL.innerHTML = `Fase: ${phaseId}`;
  phaseEL.setAttribute('data-phase', phaseId);
};

export const getPhaseValue = () => {
  const phaseEl = document.querySelector('.phase');

  return Number(phaseEl.getAttribute('data-phase'));
};
