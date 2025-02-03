using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace movieApi.Models
{
    public class MovieItem
    {
            public string Title { get; set; }
            public string Year { get; set; }
            public string Rated { get; set; }
            public string Released { get; set; }
            public string Runtime { get; set; }
            public string Genre { get; set; }
            public string Director { get; set; }
            public string Writer { get; set; }
            public string Actors { get; set; }
            public string Plot { get; set; }
            public string Language { get; set; }
            public string Country { get; set; }
            public string Awards { get; set; }
            public string Poster { get; set; }
            public string Metascore { get; set; }
            public string imdbRating { get; set; }
            public string imdbVotes { get; set; }
            public string imdbID { get; set; }
            public string Type { get; set; }
            public string Response { get; set; }
            public List<string> Images { get; set; }

            // Constructor
            public MovieItem(string title, string year, string rated, string released, string runtime,
                             string genre, string director, string writer, string actors, string plot,
                             string language, string country, string awards, string poster, string metascore,
                             string imdbRating, string imdbVotes, string imdbID, string type, string response,
                             List<string> images)
            {
                Title = title;
                Year = year;
                Rated = rated;
                Released = released;
                Runtime = runtime;
                Genre = genre;
                Director = director;
                Writer = writer;
                Actors = actors;
                Plot = plot;
                Language = language;
                Country = country;
                Awards = awards;
                Poster = poster;
                Metascore = metascore;
                this.imdbRating = imdbRating;
                this.imdbVotes = imdbVotes;
                this.imdbID = imdbID;
                Type = type;
                Response = response;
                Images = images ?? new List<string>(); // Ensures Images is not null
            }

            // Parameterless constructor for deserialization (JSON)
            public MovieItem()
            {
                Images = new List<string>();
            }
        }

    
}
