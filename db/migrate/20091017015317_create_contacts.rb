class CreateContacts < ActiveRecord::Migration
  def self.up
    create_table :contacts do |t|
      t.string :name
      t.text :e_mail
      t.text :web

      t.timestamps
    end
  end

  def self.down
    drop_table :contacts
  end
end
