import {renderHook} from '@testing-library/react-native';
import {useImagePreview} from '../src/hooks';
import {it, describe, expect} from '@jest/globals';

describe('useImagePreview', () => {
  it("should append '/preview' to a given URL", () => {
    const testURL =
      'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg';
    const expectedURL = `${testURL}/preview`;

    const {result} = renderHook(() => useImagePreview());

    const getPreviewURL = result.current;

    expect(getPreviewURL(testURL)).toEqual(expectedURL);
  });
});
