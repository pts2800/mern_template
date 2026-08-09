//add
export const getThing = (req, res) => {
  res.status(200).send("got things successfully");
};
//add
export const createThing = (req, res) => {
  res.status(201).send("created new thing successfully");
};
//add
export const updateThing = (req, res) => {
  res.status(200).send("thing updated successfully");
};
//example of delete
//example of json return
export const deleteThing = (req, res) => {
  res.status(200).json({message: "thing deleted successfully"});
};
