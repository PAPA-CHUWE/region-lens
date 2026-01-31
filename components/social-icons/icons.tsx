import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  className?: string;
};

/* Google */
export const Google = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 533.5 544.3"
    className={className}
    fill="currentColor"
    {...props}
  >
    <path d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.4H272v95.3h146.9c-6.3 34-25 62.8-53.3 82.1v68h86.2c50.5-46.5 81.7-115 81.7-195z" />
    <path d="M272 544.3c72.6 0 133.5-24.1 178-65.5l-86.2-68c-24 16.1-54.6 25.6-91.8 25.6-70.7 0-130.6-47.7-152-111.6H30.5v70.3C74.7 482.5 167.3 544.3 272 544.3z" />
    <path d="M120 324.8c-10.5-31.4-10.5-65.4 0-96.8V157.7H30.5c-41 81.8-41 179.1 0 260.9L120 324.8z" />
    <path d="M272 107.7c39.5-.6 77.5 14.3 106.4 41.8l79.2-79.2C411.3 24.5 343.4-1 272 0 167.3 0 74.7 61.8 30.5 157.7L120 228c21.4-63.9 81.3-110.3 152-120.3z" />
  </svg>
);

/* Microsoft */
export const Microsoft = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 23 23"
    className={className}
    fill="currentColor"
    {...props}
  >
    <rect x="1" y="1" width="9" height="9" />
    <rect x="13" y="1" width="9" height="9" />
    <rect x="1" y="13" width="9" height="9" />
    <rect x="13" y="13" width="9" height="9" />
  </svg>
);

/* Facebook */
export const Facebook = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    {...props}
  >
    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
  </svg>
);
