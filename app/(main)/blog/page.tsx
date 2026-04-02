"use client";
import BlogCard from '@/app/components/blog/BlogCard';
import Container from '@/app/components/shared/utils/Container'
import Pagination from '@/app/components/shared/utils/Pagination';
import SectionHeader from '@/app/components/shared/utils/SectionHeader';

export default function page() {

  const posts = [
    {
      title: "The Future of Renewable Energy in Infrastructure",
      desc: "How solar and wind energy are reshaping global infrastructure development and creating new investment opportunities.",
      date: "Jan 12, 2026",
      read: "5 min read",
      cat: "Energy",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
      author: "A. Rahman",
      avatarColor: "#346739",
    },
    {
      title: "Smart Logistics in Global Supply Chains",
      desc: "Digital transformation in logistics and port management systems is driving unprecedented efficiency gains worldwide.",
      date: "Dec 28, 2025",
      read: "4 min read",
      cat: "Logistics",
      img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&q=80",
      author: "S. Islam",
      avatarColor: "#0EA5E9",
    },
    {
      title: "Sustainable Energy Projects Around the World",
      desc: "A look into major renewable energy projects driving global impact and accelerating the transition away from fossil fuels.",
      date: "Dec 10, 2025",
      read: "6 min read",
      cat: "Sustainability",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
      author: "M. Hossain",
      avatarColor: "#F59E0B",
    },
    {
      title: "The Future of Renewable Energy in Infrastructure",
      desc: "How solar and wind energy are reshaping global infrastructure development and creating new investment opportunities.",
      date: "Jan 12, 2026",
      read: "5 min read",
      cat: "Energy",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
      author: "A. Rahman",
      avatarColor: "#346739",
    },
    {
      title: "Smart Logistics in Global Supply Chains",
      desc: "Digital transformation in logistics and port management systems is driving unprecedented efficiency gains worldwide.",
      date: "Dec 28, 2025",
      read: "4 min read",
      cat: "Logistics",
      img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&q=80",
      author: "S. Islam",
      avatarColor: "#0EA5E9",
    },
    {
      title: "Sustainable Energy Projects Around the World",
      desc: "A look into major renewable energy projects driving global impact and accelerating the transition away from fossil fuels.",
      date: "Dec 10, 2025",
      read: "6 min read",
      cat: "Sustainability",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
      author: "M. Hossain",
      avatarColor: "#F59E0B",
    },
  ];


  return (
    <Container className='py-10'>
      <div className='mb-10'>
        <SectionHeader
          title="News & Blog"
          description="Explore industry insights, company updates, and global energy trends from PetroSol Global."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {posts.map((post, i) => {
          return (
            <BlogCard
              key={i}
              post={post}
            />
          );
        })}
      </div>

      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={() => { }}
      />
    </Container>
  )
}
