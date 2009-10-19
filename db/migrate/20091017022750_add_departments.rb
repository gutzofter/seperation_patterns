class AddDepartments < ActiveRecord::Migration
  def self.up
    add_column :contacts, :dept, :string
  end

  def self.down
    remove_column :contacts, :dept, :string
  end
end
