import api from '../axios';

export default function postItem(nome, rua, bairro, ref, horarioChegada) {
  const data = {
    nome,
    rua,
    bairro,
    ref,
    horarioChegada,
  };
  api.post('/insert', data)
    .then((response) => {
      alert(response.data);
    }).catch((error) => {
      alert(error.message);
    });
}
export function deleteItem(id) {
  const data = {
    id,
  };
  api.post('/delete', data).then((response) => {
    alert(response.data);
  }).catch((error) => {
    alert(error.message);
  });
}
