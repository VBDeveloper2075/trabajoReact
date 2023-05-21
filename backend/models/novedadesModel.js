
import { query as _query } from './bd';

async function getNovedades(){
      var query = "select * from novedades order by id desc";
      var rows = _query(query);
      return rows;
    }

async function insertNovedad(obj) {
  try {
    var query = "insert into novedades set ? ";
    var rows = _query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default { getNovedades, deleteNovedadById, insertNovedad }