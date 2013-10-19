require 'uri'

class Params
  def initialize(req, route_params) 
    @params = {}
  end
#add a params thing in the controller
  def [](key)
    @params[key]
  end

  def to_s

  end

  private
  def parse_www_encoded_form(www_encoded_form)
    #parse URI encoded string, setting keys and values in the @params hash
    temp = {}
    p '=================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================='
    pairs = URI.decode_www_form(www_encoded_form)
    pairs.each do |key, val|
   
    end
  end

  def parse_key(key)

  end
end
#raw_post looks up the request body