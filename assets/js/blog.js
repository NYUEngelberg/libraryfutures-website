window.addEventListener('load', e => {

  const onFilter = (e) => {
    let author = e.target.value;
    const toShow = document.querySelectorAll(`article:has(span[data-author="${author}"])`);
    for (const el of toShow){
      el.classList.remove('hidden');
    }
    const toHide = document.querySelectorAll(`article:not(:has(span[data-author="${author}"]))`);
    for (const el of toHide){
      el.classList.add('hidden');
    }
  }
  const select = document.getElementById('author-select')
  if (select){
    select.addEventListener('change', onFilter);
  }

})
