using ApiPlace.Data;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();
builder.Services.AddSingleton<WeatherForecastService>();
//builder.Services.AddHttpClient<IEmployee, EmployeeService>(client =>
//{
//    client.BaseAddress = new Uri("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=13.572034426083617,100.57446832565891&radius=500&types=restaurant&key=AIzaSyAPdqXkcwXNLuVE6WhTKS3ZCkFQ2OQj2fg");
//});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
}


app.UseStaticFiles();

app.UseRouting();

app.MapBlazorHub();
app.MapFallbackToPage("/_Host");

app.Run();
