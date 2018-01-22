var subj={}

fetch('http://192.168.1.126:8000/apis/professor/6')
.then(data=>data.json())
.then(result=>subj=result)
.catch(error=>console.log(error))

export default subj
