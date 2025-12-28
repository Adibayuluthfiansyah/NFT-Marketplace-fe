interface ProfileBannerProps {
  image: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function ProfileBanner({
  image,
  gradientFrom = "from-purple-900",
  gradientTo = "to-blue-900",
}: ProfileBannerProps) {
  return (
    <div className={`relative h-48 md:h-64 bg-gradient-to-r ${gradientFrom} ${gradientTo}`}>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark"></div>
    </div>
  );
}
