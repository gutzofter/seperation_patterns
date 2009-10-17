# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_seperation_patterns_session',
  :secret      => 'eb048b6890c68a43d74d265cf5eaa72ca454c27bc6c19158825f23e715daf0acd40c3e89f1ae07f8a151a76aa36084aca1ec8afcbcc016da57db807afe2cd170'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
