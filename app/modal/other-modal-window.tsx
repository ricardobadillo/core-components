import ThemedText from '@/presentation/shared/ThemedText'
import ThemedView from '@/presentation/shared/ThemedView'

export default function OtherModal() {
  return (
    <ThemedView bgColor='#4D33DD' className='flex-1 gap-4 items-center justify-center'>
      <ThemedText>Otro modal</ThemedText>
    </ThemedView>
  )
}