require 'webrick'

server = WEBrick::HTTPServer.new :Port => 8080
#mount_proc takes a directory and takes a proc or block to call it with.

trap('INT') { server.shutdown }

server.mount_proc '/' do |request, response|
	
	request.body = request.path
	response.ContentType = "text/text" 
end



