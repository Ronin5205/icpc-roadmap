(() => {
  const controls = document.getElementById('paper-controls');
  if (!controls) return;
  const search = document.getElementById('paper-search');
  const selectors = ['stage', 'region', 'kind'].map(key => [key, document.getElementById(`paper-${key}`)]);
  const cards = [...document.querySelectorAll('.paper-card')];
  const count = document.getElementById('paper-count');
  const empty = document.getElementById('paper-empty');
  const filter = () => {
    const words = search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const card of cards) {
      const matches = words.every(word => card.dataset.search.includes(word)) &&
        selectors.every(([key, select]) => !select.value || card.dataset[key] === select.value);
      card.hidden = !matches;
      if (matches) visible++;
      else card.querySelectorAll('details').forEach(detail => { detail.open = false; });
    }
    count.textContent = `Showing ${visible} of ${cards.length} packets`;
    empty.hidden = visible !== 0;
  };
  search.addEventListener('input', filter);
  selectors.forEach(([, select]) => select.addEventListener('change', filter));
  document.getElementById('paper-reset').addEventListener('click', () => {
    search.value = '';
    selectors.forEach(([, select]) => { select.value = ''; });
    filter();
    search.focus();
  });
  controls.hidden = false;
  filter();
})();
