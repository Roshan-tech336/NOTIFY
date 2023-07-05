/**
 * GET /
 * Homepage
 */
exports.homepage = async (req, res) => {
   const locals ={
    title: "NOTIFY",
    description: "Your Notes on the Go!",
   }
   
   res.render('index', {
   locals,
   layout: '../views/layouts/front-page'
 });
}

/**
 * GET /
 * About
 */
exports.about = async (req, res) => {
    const locals ={
     title: "About - NOTIFY",
     description: "Your Notes on the Go!",
    }
    
    res.render('about', locals);
 }