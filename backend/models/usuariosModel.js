import { query as _query } from './bd';
import md5 from 'md5';

async function getUserByUsernameAndPassword(user, password){
  try{
    var query = "select * from usuarios where usuario = ? and password = ? limit 1";
    var rows = await _query(query, [user,md5(password)]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
}

export default { getUserByUsernameAndPassword }