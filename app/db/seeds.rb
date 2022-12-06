# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# Examples:
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "csv"

csv_text = File.read(Rails.root.join('lib', 'seeds', 'Phase-4-Project-Day-1.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')


csv.each do |row|
  t = Project.new
  t.date = row['Date']
  t.name = row['Name']
  t.progress = row['Progress']
  t.challenge = row['Challenge'] 
  t.bug = row['Bug']
  t.image = row['Image']
  t.save
end

