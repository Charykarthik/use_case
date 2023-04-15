function storage(line)
{
var values = line.split(',');
var obj = new Object();
obj.s.no= values[0];
obj.Emp_name= values[1];
obj.Emp_id= values[2];
obj.location= values[3];
var jsonString=JSON.stringify(obj);
return jsonString;
}
