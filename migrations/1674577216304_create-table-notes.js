/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('notes', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    title: {
      type: 'TEXT',
      notNull: true,
    },
    body: {
      type: 'TEXT',
      notNull: true,
    },
    tags: {
      type: 'TEXT[]',
      notNull: true,
    },
    created_at: {
      type: 'TEXT',
      notNull: true,
    },
    updated_at: {
      type: 'TEXT',
      notNull: true,
    }
  })
};

exports.down = pgm => {
  pgm.dropTable('notes');
};

/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.createTable('songs', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true
    },
    title: {
      type: 'VARCHAR(50)',
      notNull: true
    },
    year: {
      type: 'INTEGER',
      notNull: true
    },
    performer: {
      type: 'VARCHAR(30)',
      notNull: true
    },
    genre: {
      type: 'VARCHAR(30)',
      notNull: true
    },
    duration: {
      type: 'INTEGER'
    },
    albumId: {
      type: 'VARCHAR(50)'
    }
  })
}

exports.down = pgm => {
  pgm.dropTable('songs')
}


