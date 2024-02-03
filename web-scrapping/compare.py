import os

# Get the directory of the current script
script_directory = os.path.dirname(os.path.abspath(__file__))

# Specify the relative path to the female.txt file
relative_path = "female.txt"

# Construct the full path
file_path = os.path.join(script_directory, relative_path)

# Check if the file exists before attempting to read it
if os.path.isfile(file_path):
    # Open and read the file
    with open(file_path, "r") as file:
        female_data = file.read()
        
    # Print or use the file content
    print(female_data)
else:
    # debugging
    print(f"Error: File {relative_path} not found.")