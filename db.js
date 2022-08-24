const { MongoClient } = require('mongodb')

var Temp = {};

module.exports = async (action,contents) => {
    await Credentials();
    const uri = 'mongodb+srv://' + Temp.Uname + ':' + Temp.Pword + '@steintechvms.1auhct7.mongodb.net/VMS?retryWrites=true&w=majority'
    const client = new MongoClient(uri);

    try{
        await client.connect();
        if(action == 'insert'){
            
        }
        else if(action == 'update'){
            await updateVolunteer();
        }
        else if(action == 'find'){
            await findVolunteer();
        }
        else if(action == 'delete'){
            await updateVolunteer();
        }
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}

async function Credentials(){
    Temp.Uname = '';
    Temp.Pword = '';
}

async function findVolunteer(){ // used for display of all that meet the criteria looking to expand for multi-filtering
    const result = await VolunteerSchema.find({
      Approval_status: 'Approved',
    })
    console.log('Result:', result)
  }
  
  async function updateVolunteer(){ // will update all of the first onject to the second, most likely to turn into a findOneAndupdate function
    await VolunteerSchema.updateMany({
      Last_name: 'Schipwreck'
    }, {
      Last_name: 'Schipman'
    })
  }
  
  async function deleteVolunteer(){ // deletes First value that matches perameters more delete options available
    await VolunteerSchema.deleteOne({
      First_name: 'James',
    })
  }
