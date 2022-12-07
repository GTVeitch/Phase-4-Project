#Telling ruby that it will be using a CSV file
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

User.create(username: "Music Searcher", password: "Music Searcher", display_name: "Music Searcher")
User.create(username: "Unsolicited Advice", password: "Unsolicited Advice", display_name: "Unsolicited Advice")
User.create(username: "Movie Tracker", password: "Movie Tracker", display_name: "Movie Tracker")
User.create(username: "Weeb trash", password: "Weeb trash", display_name: "Weeb trash")
User.create(username: "Adopt Til' You Drop ", password: "Adopt Til' You Drop", display_name: "Adopt Til' You Drop")
User.create(username: "Lord of the Rings Character Wiki", password: "Lord of the Rings Character Wiki", display_name: "Lord of the Rings Character Wiki")
User.create(username: "Ribbit", password: "Ribbit", display_name: "Ribbit")
User.create(username: "Destination Picker", password: "Destination Picker", display_name: "Destination Picker")
User.create(username: "Kick Stop", password: "Kick Stop", display_name: "Kick Stop")
User.create(username: "Beany", password: "Beany", display_name: "Beany")
User.create(username: "Soccer League", password: "Soccer League", display_name: "Soccer League")
User.create(username: "PEAKED", password: "PEAKED", display_name: "PEAKED")
