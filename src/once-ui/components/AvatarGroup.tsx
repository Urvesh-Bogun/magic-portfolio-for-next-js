"use client";

import React, { forwardRef } from "react";

import { Avatar, AvatarProps, Flex } from ".";
import styles from "./AvatarGroup.module.scss";
import classNames from "classnames";

interface AvatarGroupProps extends React.ComponentProps<typeof Flex> {
  myavatars: AvatarProps[];
  size?: "xs" | "s" | "m" | "l" | "xl";
  reverse?: boolean;
  limit?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ myavatars, size = "m", reverse = false, limit, className, style, ...rest }, ref) => {
    const displayedAvatars = limit ? myavatars.slice(0, limit) : myavatars;
    const remainingCount = limit && myavatars.length > limit ? myavatars.length - limit : 0;

    return (
      <Flex
        vertical="center"
        ref={ref}
        className={classNames(styles.myavatarGroup, className)}
        style={style}
        zIndex={0}
        {...rest}
      >
        {displayedAvatars.map((myavatarProps, index) => (
          <Avatar
            key={index}
            size={size}
            {...myavatarProps}
            className={styles.myavatar}
            style={{
              ...myavatarProps.style,
              zIndex: reverse ? displayedAvatars.length - index : index + 1,
            }}
          />
        ))}
        {remainingCount > 0 && (
          <Avatar
            value={`+${remainingCount}`}
            className={styles.myavatar}
            size={size}
            style={{
              ...style,
              zIndex: reverse ? -1 : displayedAvatars.length + 1,
            }}
          />
        )}
      </Flex>
    );
  },
);

AvatarGroup.displayName = "AvatarGroup";

export { AvatarGroup };
export type { AvatarGroupProps };
