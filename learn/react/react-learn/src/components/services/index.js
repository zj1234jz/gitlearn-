export default async function getAllStudent(){
        return await fetch("http://api.duyiedu.com/api/student/findAll?appkey=demo13_1545210570249").then(res=>res.json()).then(res=>res.data);
}