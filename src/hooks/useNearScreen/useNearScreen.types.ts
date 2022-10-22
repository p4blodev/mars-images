import { RefObject } from 'react';

export interface UseNearScreenType {
  distance?: string;
  externalRef: RefObject<HTMLDivElement> | null;
  once: boolean;
}
