import axios from 'axios';

const WORDPRESS_URL = process.env.WORDPRESS_URL || 'https://your-wordpress-site.com';
const WP_API_URL = `${WORDPRESS_URL}/wp-json/wp/v2`;

export interface Post {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  date: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface Page {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
}

export const wordpressApi = {
  async getPosts(perPage: number = 10): Promise<Post[]> {
    try {
      const response = await axios.get(`${WP_API_URL}/posts`, {
        params: {
          per_page: perPage,
          _embed: true,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  },

  async getPost(slug: string): Promise<Post | null> {
    try {
      const response = await axios.get(`${WP_API_URL}/posts`, {
        params: {
          slug,
          _embed: true,
        },
      });
      return response.data[0] || null;
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  },

  async getPages(): Promise<Page[]> {
    try {
      const response = await axios.get(`${WP_API_URL}/pages`);
      return response.data;
    } catch (error) {
      console.error('Error fetching pages:', error);
      return [];
    }
  },

  async getPage(slug: string): Promise<Page | null> {
    try {
      const response = await axios.get(`${WP_API_URL}/pages`, {
        params: {
          slug,
        },
      });
      return response.data[0] || null;
    } catch (error) {
      console.error('Error fetching page:', error);
      return null;
    }
  },
};