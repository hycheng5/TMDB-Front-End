import axios from 'axios';

class  LeafApi{
  static getAllLeavesFake(){
    return {
      leaves:{
        'leaf-1': {'id': 'leaf-1', 'description':'leaf-1 description'},
        'leaf-2': {'id': 'leaf-2', 'description':'leaf-2 description'},
        'leaf-3': {'id': 'leaf-3', 'description':'leaf-3 description'},

      },
      columns:{
        'column-1':{
          'id':'column-1',
          'title':'leaves list',
          'leavesId':['leaf-1','leaf-2','leaf-3']
        }
      },
      columnOrder:['column-1']
    }
  }
  //this gets all leaves
  static getAllMovies(){
      axios({
        method:'get',
        url:'http://localhost:8080/api/get_user_movies'

      }).then(res=>{
        console.log(res);
      })
  }
}


export default LeafApi;
