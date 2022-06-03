CMS.registerEventListener({
  name: 'prePublish',
  handler: ((data) => console.log(data.entry.get('name'))),
});

const localStorage = [
  { id: 'id_produit', color: 'green', qty: 10 },
  { id: 'id_produit', color: 'blue', qty: 10 },
  { id: 'id_produit_2', color: 'green', qty: 10 },
];

localStorage.setItem(JSON.stringify(localStorage));

const node = document.getElementById('id_produit');
const div = document.createElement('div');
const name = 'Test';

const div = `<div>
  ${name}
  <span>Mon contenu</span>
</div>`;

node.appendChild(div);
