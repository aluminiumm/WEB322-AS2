const fakeDB = {

    movies : [
        {
            id:1616880,
            title: "The Last Vermeer",
            priceRental:4.99,
            priceBuy:14.99,
            description:"While Joseph Piller (Claes Bang), a Dutch Jew, was fighting in the Resistance during the Second World War, the witty, debonair art connoisseur Han van Meegeren (Guy Pearce) was hosting hedonistic soirées and selling Dutch art treasures to Hermann Göring and other top Nazis. Following the war, Piller becomes an investigator assigned the task of identifying and redistributing stolen art, resulting in the flamboyant van Meegeren being accused of collaboration -- a crime punishable by death. But, despite mounting evidence, Piller, with the aid of his assistant (Vicky Krieps), becomes increasingly convinced of Han's innocence and finds himself in the unlikely position of fighting to save his life.",
            tv:false,
            featured:false
        },
        {
            id:198725,
            title: "The Office: Season 5",
            priceRental:null,
            priceBuy:17.99,
            description:"Last season left OFFICE fans gasping and worked up for more - and so, the most anticipated season is finally on the clock. New and poignant foolishness continues to plague the world of the unwary Dunder Mifflin 9-to-5'ers. Michael forces all employees to take part in a corporate weight loss challenge, but it's his chutzpah that may finally tip the scales.",
            tv:true,
            featured:false
        },
        {
            id:1576347,
            title: "Freaky",
            priceRental:5.99,
            priceBuy:14.99,
            description:"From Blumhouse (Happy Death Day), things get Freaky at Blissfield High when 17-year-old Millie (Kathryn Newton) swaps bodies with an infamous serial killer (Vince Vaughn).",
            tv:false,
            featured:true
        },
        {
            id:1537498,
            title: "This Is Us: Season 5",
            priceRental:null,
            priceBuy:22.99,
            description:"Everyone has a family. And every family has a story. THIS IS US chronicles the Pearson family across the decades: from Jack (Milo Ventimiglia) and Rebecca (Mandy Moore) as young parents in the 1980s to their 37-year-old kids, Kevin (Justin Hartley), Kate (Chrissy Metz) and Randall (Sterling K. Brown) searching for love and fulfillment in the present day. This grounded, life-affirming dramedy reveals how the tiniest events in our lives impact who we become, and how the connections we share with each other can transcend time, distance and even death. ",
            tv:true,
            featured:true
        },
        {
            id:13316,
            title: "The Santa Clause",
            priceRental:3.99,
            priceBuy:19.99,
            description:"On Christmas Eve, a divorced dad and his son discover Santa Claus has fallen off their roof. When the dad takes the reigns, he finds he is now the new Santa, and must convince a world of disbelievers, including himself.",
            tv:false,
            featured:false
        },
        {
            id:1051602,
            title: "PAW Patrol: Mighty Pups: Season 1",
            priceRental:null,
            priceBuy:4.99,
            description:"PAW PATROL is a CG action-adventure preschool series starring a pack of six heroic puppies led by a tech-savvy 10-year-old boy named Ryder. ",
            tv:true,
            featured:false
        },
        {
            id:558959,
            title: "The Grand Seduction",
            priceRental:3.99,
            priceBuy:9.99,
            description:"A small fishing village must procure a local doctor to secure a lucrative business contract. When unlikely candidate and big city doctor Paul Lewis lands in their lap for a trial residence, the townsfolk rally together to charm him into staying. As the doctor's time in the village winds to a close, acting mayor Murray French has no choice but to pull out all the stops and begin The Grand Seduction.",
            tv:false,
            featured:true
        },
        {
            id:1101209,
            title: "Game of Thrones: Season 8",
            priceRental:null,
            priceBuy:19.99,
            description:"GAME OF THRONES returns for its eighth and final season. Based on the popular book series &quote;A Song of Ice and Fire,&quote; by George R.R. Martin, this hit fantasy series chronicles an epic struggle for power in a vast and violent kingdom. Also includes documentary GAME OF THRONES: THE LAST WATCH. ",
            tv:true,
            featured:true
        },
        {
            id:1576343,
            title: "Let Him Go",
            priceRental:5.99,
            priceBuy:14.99,
            description:"Following the loss of their son, a retired sheriff and his wife leave their Montana ranch to rescue their young grandson from the clutches of a dangerous family living off the grid in the Dakotas.",
            tv:false,
            featured:false
        },
        {
            id:183333,
            title: "The Simpsons: Season 6",
            priceRental:null,
            priceBuy:19.99,
            description:"Before Westworld the TV show (but after Westworld the movie) there was Itchy & Scratchy Land. It's in The Simpsons Season 6, along with #metoo precursor Homer Badman, and Who Shot Mr. Burns? ",
            tv:true,
            featured:false
        },
        {
            id:1392874,
            title: "The Climb",
            priceRental:4.99,
            priceBuy:14.99,
            description:"THE CLIMB is a hilarious - and oftentimes awkward -examination of the toxic lifelong friendship of Mike and Kyle. While Kyle is kind, and a bit of a pushover, Mike is a train wreck, who despite his affection for Kyle, seems to sabotage all of Kyle's relationships. Told through a series of vignettes, Kyle struggles to deal with the fact that his best friend might just be the worst person for him. ",
            tv:false,
            featured:true
        },
        {
            id:1204002,
            title: "Grey's Anatomy: Season 17",
            priceRental:null,
            priceBuy:24.99,
            description:"Solidifying its place in television history as the longest-running primetime medical drama ever. The highly beloved cultural touchstone that continues to push boundaries with timely subject matter and characters that break the mold. Follow Meredith Grey and the team of doctors at Grey Sloan Memorial, who are faced with life-or-death decisions on a daily basis. They seek comfort from one another, and at times, more than just friendship. Together they discover that neither medicine nor relationships can be defined in black and white.",
            tv:true,
            featured:true
            }
            
    ],


    getAllMovies()
    {
        return this.movies;
    },


   // get movie id
    getAMovie(id)
    {
      const movieReturned = this.movies.find((movie)=>{
            return movie.id == id;
        })

        return movieReturned;
    },
}

module.exports=fakeDB;
