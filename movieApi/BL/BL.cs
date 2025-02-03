using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using movieApi.Models;

public class BL
{
    private readonly IConfiguration _config;
    private readonly HttpClient _httpClient;

    public BL(IConfiguration config)
    {
        _config = config;
        _httpClient = new HttpClient();
    }

    public async Task<List<MovieItem>> GetMoviesAsync()
    {
        try
        {
            // Get API URL from configuration
            string apiUrl = _config["MovieApi:BaseUrl"]; // Example: "https://api.example.com/movies"

            if (string.IsNullOrEmpty(apiUrl))
            {
                throw new Exception("API URL is not configured.");
            }

            // Make an HTTP GET request
            HttpResponseMessage response = await _httpClient.GetAsync(apiUrl);

            if (!response.IsSuccessStatusCode)
            {
                throw new Exception($"Error fetching movies: {response.StatusCode}");
            }

            // Read and deserialize JSON response
            string json = await response.Content.ReadAsStringAsync();
            List<MovieItem> movies = JsonSerializer.Deserialize<List<MovieItem>>(json, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            return movies ?? new List<MovieItem>();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception in GetMoviesAsync: {ex.Message}");
            return new List<MovieItem>(); // Return an empty list on failure
        }
    }
}
