export class taskUtil {
    getFormData(data) : FormData{
    var form_data = new FormData();

    for ( let key in data ) {
      if(key =="due_date"){
        form_data.append(key,data[key].toString().split('T').join(' '));
      }
      else{
        form_data.append(key, data[key]);
      }
    }
    return form_data;
  }
}